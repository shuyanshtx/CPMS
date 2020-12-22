package servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import db.MySQLConnection;
import entity.Reservation;
import entity.ReservationRequestBody;
import entity.ResultResponse;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Set;

@WebServlet(name = "ReservationServlet", urlPatterns = {"/reservation"})
public class ReservationServlet extends HttpServlet implements IRoot {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession sessionAuthenticated = checkAuthentication(mapper, request, response);
        if (sessionAuthenticated == null) return;

        ReservationRequestBody reservation = mapper.readValue(request.getReader(), ReservationRequestBody.class);

        MySQLConnection connection = new MySQLConnection();
        connection.makeReservation(reservation);
        connection.close();

        ResultResponse resultResponse = new ResultResponse("SUCCESS");
        mapper.writeValue(response.getWriter(), resultResponse);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession sessionAuthenticated = checkAuthentication(mapper, req, resp);
        if (sessionAuthenticated == null) return;

        ReservationRequestBody reservation = mapper.readValue(req.getReader(), ReservationRequestBody.class);

        MySQLConnection connection = new MySQLConnection();
        connection.deleteReservation(reservation.getReservationId());
        connection.close();

        ResultResponse resultResponse = new ResultResponse("SUCCESS");
        mapper.writeValue(resp.getWriter(), resultResponse);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession sessionAuthenticated = checkAuthentication(mapper, request, response);
        if (sessionAuthenticated == null) return;

        int userId = Integer.parseInt((String)sessionAuthenticated.getAttribute("user_id"));

        MySQLConnection connection = new MySQLConnection();
        Set<Reservation> reservations = connection.getReservations(userId);
        connection.close();
        mapper.writeValue(response.getWriter(), reservations);
    }
}
