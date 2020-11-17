package servlet;

import db.MySQLConnection;
import entity.LoginRequestBody;
import entity.LoginResponseBody;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ResidentServlet", urlPatterns = {"/resident_account"})
public class ResidentAccount extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        if (session == null) {
            response.setStatus(403);
            return;
        }
        String user_id = session.getAttribute("user_id").toString();
        MySQLConnection conn = new MySQLConnection();

        conn.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
