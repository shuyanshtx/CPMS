package entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Reservation {
    private int reservationId;
    private int userId;
    private Timestamp reservationTime;
    private String amenity;
    private String status;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    @JsonProperty("reservation_id")
    public int getReservationId() {
        return reservationId;
    }

    public int getUserId() {
        return userId;
    }

    public Timestamp getReservationTime() {
        return reservationTime;
    }

    public String getAmenity() {
        return amenity;
    }

    public String getStatus() {
        return status;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation that = (Reservation) o;
        return reservationId == that.reservationId &&
                userId == that.userId &&
                Objects.equals(reservationTime, that.reservationTime) &&
                Objects.equals(amenity, that.amenity) &&
                Objects.equals(status, that.status) &&
                Objects.equals(createdAt, that.createdAt) &&
                Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reservationId, userId, reservationTime, amenity, status, createdAt, updatedAt);
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + reservationId +
                ", userId=" + userId +
                ", reservationTime=" + reservationTime +
                ", amenity='" + amenity + '\'' +
                ", status='" + status + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }

    public static class Builder {
        private int reservationId;
        private int userId;
        private Timestamp reservationTime;
        private String amenity;
        private String status;
        private Timestamp createdAt;
        private Timestamp updatedAt;

        public Builder reservationId(int reservationId) {
            this.reservationId = reservationId;
            return this;
        }

        public Builder userId(int userId) {
            this.userId = userId;
            return this;
        }

        public Builder reservationTime(Timestamp reservationTime) {
            this.reservationTime = reservationTime;
            return this;
        }

        public Builder amenity(String amenity) {
            this.amenity = amenity;
            return this;
        }

        public Builder status(String status) {
            this.status = status;
            return this;
        }

        public Builder createdAt(Timestamp createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Builder updatedAt(Timestamp updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public Reservation build() {
            Reservation reservation = new Reservation();
            reservation.reservationId = reservationId;
            reservation.userId = userId;
            reservation.reservationTime = reservationTime;
            reservation.amenity = amenity;
            reservation.status = status;
            reservation.createdAt = createdAt;
            reservation.updatedAt = updatedAt;
            return reservation;
        }
    }
}
