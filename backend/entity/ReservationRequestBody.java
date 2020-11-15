package entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;

public class ReservationRequestBody {
    @JsonProperty("reservation_id")
    public int reservationId;

    @JsonProperty("user_id")
    public int userId;

    @JsonProperty("reservation_time")
    public String reservationTime;

    @JsonProperty("amenity")
    public String amenity;

    @JsonProperty("status")
    public String status;

    public int getReservationId() {
        return reservationId;
    }

    public int getUserId() {
        return userId;
    }

    public String getReservationTime() {
        return reservationTime;
    }

    public String getAmenity() {
        return amenity;
    }

    public String getStatus() {
        return status;
    }
}
