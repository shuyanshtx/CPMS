package entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;
import java.sql.Timestamp;

public class ReservationRequestBody {
    @JsonProperty("reservation_id")
    public int reservationId;

    @JsonProperty("user_id")
    public int userId;

    @JsonProperty("reservation_date")
    public Date reservationDate;

    @JsonProperty("reservation_time")
    public String reservationTime;

    @JsonProperty("amenity")
    public String amenity;

    @JsonProperty("status")
    public String status;

    @JsonProperty("created_at")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    public Timestamp createdAt;


    @JsonProperty("updated_at")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    public Timestamp updatedAt;

    public int getReservationId() {
        return reservationId;
    }

    public int getUserId() {
        return userId;
    }

    public Date getReservationDate() { return reservationDate; }

    public String getReservationTime() {
        return reservationTime;
    }

    public String getAmenity() {
        return amenity;
    }

    public String getStatus() {
        return status;
    }

    public Timestamp getUpdatedAt() { return updatedAt; }

    public Timestamp getCreatedAt() { return createdAt; }
}
