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
import java.io.Reader;
import java.util.Set;
import java.util.stream.Collectors;

@WebServlet(name = "ReservationServlet", urlPatterns = {"/reservation"})
public class ReservationServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        ObjectMapper mapper = new ObjectMapper();
        HttpSession session = request.getSession(false);
        if (session == null) {
            response.setStatus(403);
            mapper.writeValue(response.getWriter(), new ResultResponse("Session Invalid"));
            return;
        }
        ReservationRequestBody reservation = mapper.readValue(request.getReader(), ReservationRequestBody.class);

        MySQLConnection connection = new MySQLConnection();
        connection.makeReservation(reservation);
        connection.close();

        ResultResponse resultResponse = new ResultResponse("SUCCESS");
        mapper.writeValue(response.getWriter(), resultResponse);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        ObjectMapper mapper = new ObjectMapper();
        HttpSession session = req.getSession(false);
        if (session == null) {
            resp.setStatus(403);
            mapper.writeValue(resp.getWriter(), new ResultResponse("Session Invalid"));
            return;
        }

        ReservationRequestBody reservation = mapper.readValue(req.getReader(), ReservationRequestBody.class);

        MySQLConnection connection = new MySQLConnection();
        connection.deleteReservation(reservation.getReservationId());
        connection.close();

        ResultResponse resultResponse = new ResultResponse("SUCCESS");
        mapper.writeValue(resp.getWriter(), resultResponse);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        ObjectMapper mapper = new ObjectMapper();
        HttpSession session = request.getSession(false);
        if (session == null) {
            response.setStatus(403);
            mapper.writeValue(response.getWriter(), new ResultResponse("Session Invalid"));
            return;
        }

        int userId = Integer.parseInt(request.getParameter("user_id"));

        MySQLConnection connection = new MySQLConnection();
        Set<Reservation> reservations = connection.getReservations(userId);
        connection.close();
        mapper.writeValue(response.getWriter(), reservations);
    }
}
