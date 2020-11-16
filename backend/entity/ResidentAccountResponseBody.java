package entity;

public class ResidentAccountResponseBody {
    public String name;
    public String email;
    public String unitNum;
    public String phoneNum;

    public ResidentAccountResponseBody(String name, String email, String unitNum, String phoneNum) {
        this.name = name;
        this.email = email;
        this.unitNum = unitNum;
        this.phoneNum = phoneNum;
    }
}
