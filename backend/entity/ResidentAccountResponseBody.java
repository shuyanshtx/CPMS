package entity;

public class ResidentAccountResponseBody {
    public String name;
    public String email;
    public int unitNum;
    public String phone;

    public ResidentAccountResponseBody(String name, String email, int unitNum, String phone) {
        this.name = name;
        this.email = email;
        this.unitNum = unitNum;
        this.phone = phone;
    }
}
