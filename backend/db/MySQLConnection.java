package db;

import com.mysql.cj.x.protobuf.MysqlxPrepare;
import entity.Reservation;
import entity.ReservationRequestBody;

import java.sql.*;
import java.util.HashSet;
import java.util.Set;

public class MySQLConnection {
    private Connection conn;

    public MySQLConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
            conn = DriverManager.getConnection(MySQLDBUtil.URL);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void close() {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }

    // return a String representing userId, or a null if not
    public int verifyLogin(String email, String password) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return 0;
        }
        String sql = "SELECT user_id FROM users WHERE email = ? AND password = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, email);
            statement.setString(2, password);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return rs.getInt("user_id");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return 0;
    }

    public String[] getUserInfo(int userId) {
        String[] userInfo = new String[7];
        if (conn == null) {
            System.err.println("DB connection failed");
            return userInfo;
        }
        userInfo[0] = "" + userId;
        String sql = "SELECT first_name, last_name, unit_num, email, phone, user_type FROM users WHERE user_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, userId);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                userInfo[1] = rs.getString("first_name");
                userInfo[2] = rs.getString("last_name");
                userInfo[3] = rs.getString("unit_num");
                userInfo[4] = rs.getString("email");
                userInfo[5] = rs.getString("phone");
                userInfo[6] = rs.getString("user_type");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return userInfo;
    }

    public void updatePassword(int userId, String password) {
        if (conn == null) {
            System.err.println("DB connection failed.");
            return;
        }
        String sql = "UPDATE users SET password = ? WHERE user_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, password);
            statement.setInt(2, userId);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void makeReservation(ReservationRequestBody reservation) {
        if (conn == null) {
            System.err.println("DB connection failed.");
            return;
        }
        String sql = "INSERT INTO reservations (user_id, reservation_date, reservation_time, amenity, status, created_at) VALUES (?, ?, ?, ?, ?, ?)";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, reservation.getUserId());
            statement.setDate(2, reservation.getReservationDate());
            statement.setString(3, reservation.getReservationTime());
            statement.setString(4, reservation.getAmenity());
            statement.setString(5, reservation.getStatus());
            statement.setTimestamp(6, reservation.getCreatedAt());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteReservation(int reservationId) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return;
        }
        String sql = "DELETE FROM reservations WHERE reservation_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, reservationId);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public String getReservationStatus(int reservationId) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return "";
        }
        String status = "";
        String sql = "SELECT status FROM reservations WHERE reservation_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, reservationId);
            ResultSet rs = statement.executeQuery();
            boolean hasEntry = false;
            while (rs.next()) {
                if (hasEntry) {
                    System.err.println("Duplicate reservations detected.");
                }
                status = rs.getString("status");
                hasEntry = true;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return status;
    }

    public void alterReservationApproval(int reservationId) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return;
        }
        String status = getReservationStatus(reservationId);
        String newStatus = "approved";
        if (status.equals("approved")) {
            newStatus = "unapproved";
        }

        String sql = "UPDATE reservations SET status = ? WHERE reservation_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, newStatus);
            statement.setInt(2, reservationId);
            statement.executeUpdate();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public Set<Integer> getReservationIds(int userId, String userType) {
        if (conn == null) {
            System.err.println("DB Connection failed");
            return new HashSet<>();
        }

        Set<Integer> reservationsIdsSet = new HashSet<>();

        try {
            String sql;
            PreparedStatement statement;
            if (userType == "resident") {
                sql = "SELECT reservation_id FROM reservations WHERE user_id = ?";
                statement = conn.prepareStatement(sql);
                statement.setInt(1, userId);
            } else {
                sql = "SELECT reservation_id FROM reservations";
                statement = conn.prepareStatement(sql);
            }
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                int reservationId = rs.getInt("reservation_id");
                reservationsIdsSet.add(reservationId);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return reservationsIdsSet;
    }

    public Set<Reservation> getReservations(int userId, String userType) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return new HashSet<>();
        }

        Set<Reservation> reservationsSet = new HashSet<>();
        Set<Integer> reservationIds = getReservationIds(userId, userType);

        String sql = "SELECT * FROM reservations WHERE reservation_id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            for (int reservation_id : reservationIds) {
                statement.setInt(1, reservation_id);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    reservationsSet.add(new Reservation.Builder()
                            .reservationId(rs.getInt("reservation_id"))
                            .userId(rs.getInt("user_id"))
                            .reservationDate(rs.getDate("reservation_date"))
                            .reservationTime(rs.getString("reservation_time"))
                            .amenity(rs.getString("amenity"))
                            .status(rs.getNString("status"))
                            .createdAt(rs.getTimestamp("created_at"))
                            .updatedAt(rs.getTimestamp("updated_at"))
                            .build());
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return reservationsSet;
    }

}
