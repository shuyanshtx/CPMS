package servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import db.MySQLConnection;
import entity.ResidentAccountResponseBody;
import entity.UpdatePasswordRequestBody;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ResidentAccountServlet", urlPatterns = {"/resident_account"})
public class ResidentAccountServlet extends HttpServlet implements IRoot {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession sessionAuthenticated = checkAuthentication(mapper, request, response);
        if (sessionAuthenticated == null) return;

        int userId = Integer.parseInt(sessionAuthenticated.getAttribute("user_id").toString());

        UpdatePasswordRequestBody reqBody = mapper.readValue(request.getReader(), UpdatePasswordRequestBody.class);
        MySQLConnection conn = new MySQLConnection();
        conn.updatePassword(userId, reqBody.password);
        conn.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession sessionAuthenticated = checkAuthentication(mapper, request, response);
        if (sessionAuthenticated == null) return;

        String name = sessionAuthenticated.getAttribute("first_name") + " " + sessionAuthenticated.getAttribute("last_name");
        int unitNum = Integer.parseInt((String)sessionAuthenticated.getAttribute("unit_num"));
        String email = (String) sessionAuthenticated.getAttribute("email");
        String phone = (String) sessionAuthenticated.getAttribute("phone");
        ResidentAccountResponseBody responBody = new ResidentAccountResponseBody(name, email, unitNum, phone);

        mapper.writeValue(response.getWriter(), responBody);
    }
}
