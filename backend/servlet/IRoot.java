package servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.ResultResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public interface IRoot {
    default HttpSession checkAuthentication(ObjectMapper mapper, HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        HttpSession session = req.getSession(false);
        if (session == null) {
            resp.setStatus(403);
            mapper.writeValue(resp.getWriter(), new ResultResponse("Session Invalid"));
            return null;
        }
        return session;
    }
}
