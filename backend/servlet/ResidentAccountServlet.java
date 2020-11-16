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
public class ResidentAccountServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        UpdatePasswordRequestBody reqBody = mapper.readValue(request.getReader(), UpdatePasswordRequestBody.class);
        MySQLConnection conn = new MySQLConnection();
        HttpSession session = request.getSession(false);
        System.out.println("I'm here!");
        if (session == null) {
            response.setStatus(403);
            return;
        }
        int userId = Integer.parseInt(session.getAttribute("user_id").toString());
        conn.updatePassword(userId, reqBody.password);
        conn.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        if (session == null) {
            response.setStatus(403);
            return;
        }
        int userId = (int) session.getAttribute("user_id");
        MySQLConnection conn = new MySQLConnection();
        String[] userInfo = conn.getUserInfo(userId);
        conn.close();

        String name = userInfo[1] + " " + userInfo[2];
        String unitNum = userInfo[3];
        String email = userInfo[4];
        String phoneNum = userInfo[5];
        ResidentAccountResponseBody responBody = new ResidentAccountResponseBody(name, email, unitNum, phoneNum);

        ObjectMapper mapper = new ObjectMapper();
        response.setContentType("application/json");
        mapper.writeValue(response.getWriter(), responBody);
    }
}
