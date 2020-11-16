package entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginResponseBody {

    public String user_id;

    public String first_name;
    public String last_name;
    public String unit_num;
    public String email;
    public String phone;
    public String user_type;

    public String status;
    public LoginResponseBody(String user_id, String first_name, String last_name, String unit_num, String email, String phone, String user_type, String status) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.unit_num = unit_num;
        this.email = email;
        this.phone = phone;
        this.user_type = user_type;
        this.status = status;
    }
}
