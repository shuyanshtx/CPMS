package backend.servlet;

import backend.db.MySQLConnection;
import backend.entity.LoginRequestBody;
import backend.entity.LoginResponseBody;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "LoginServlet", urlPatterns = {"/login"})
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        LoginRequestBody reqBody = mapper.readValue(request.getReader(), LoginRequestBody.class);
        MySQLConnection conn = new MySQLConnection();
        LoginResponseBody responBody;
        int user_id = conn.verifyLogin(reqBody.email, reqBody.password);
        if (user_id != 0) {
            HttpSession session = request.getSession();
            String[] userInfo = conn.getUserInfo(user_id);
            responBody = new LoginResponseBody(userInfo[0], userInfo[1], userInfo[2], userInfo[3], userInfo[4], userInfo[5], userInfo[6], "OK");
            session.setAttribute("user_id", responBody.user_id);
        } else {
            responBody = new LoginResponseBody(null, null, null, null, null, null, null, "Log in failed");
            response.setStatus(401);
        }
        conn.close();
        response.setContentType("application/json");
        mapper.writeValue(response.getWriter(), responBody);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
