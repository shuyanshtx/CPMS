package entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePasswordRequestBody {
    @JsonProperty("user_id")
    public int userId;

    @JsonProperty("password")
    public String password;
}
