package db;

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
    public String verifyLogin(String email, String password) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return null;
        }
        String sql = "SELECT id FROM users WHERE email = ? AND password = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, email);
            statement.setString(2, password);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return rs.getString("id");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public String[] getUserInfo(String userId) {
        String[] userInfo = new String[7];
        if (conn == null) {
            System.err.println("DB connection failed");
            return userInfo;
        }
        userInfo[0] = userId;
        String sql = "SELECT first_name, last_name, unit_num, email, phone, user_type FROM users WHERE id = ?";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, userId);
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

    public void makeReservation(ReservationRequestBody reservation) {
        if (conn == null) {
            System.err.println("DB connection failed.");
            return;
        }
        String sql = "INSERT INTO reservations (reservation_id, user_id, reservation_time, amenity, status) VALUES (?, ?, ?, ?, ?)";
        try {
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, reservation.getReservationId());
            statement.setInt(2, reservation.getUserId());
            statement.setString(3, reservation.getReservationTime());
            statement.setString(4, reservation.getAmenity());
            statement.setString(5, reservation.getStatus());
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

    public Set<Integer> getReservationIds(int userId) {
        if (conn == null) {
            System.err.println("DB Connection failed");
            return new HashSet<>();
        }

        Set<Integer> reservationsIdsSet = new HashSet<>();

        try {
            String sql = "SELECT reservation_id FROM reservations WHERE user_id = ?";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, userId);
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

    public Set<Reservation> getReservations(int userId) {
        if (conn == null) {
            System.err.println("DB connection failed");
            return new HashSet<>();
        }

        Set<Reservation> reservationsSet = new HashSet<>();
        Set<Integer> reservationIds = getReservationIds(userId);

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
                            .reservationTime(rs.getTimestamp("reservation_time"))
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

//    public void saveItem(Item item) {
//        if (conn == null) {
//            System.err.println("DB connection failed");
//            return;
//        }
//        String sql = "INSERT IGNORE INTO items VALUES (?, ?, ?, ?, ?)";
//        try {
//            PreparedStatement statement = conn.prepareStatement(sql);
//            statement.setString(1, item.getId());
//            statement.setString(2, item.getTitle());
//            statement.setString(3, item.getLocation());
//            statement.setString(4, item.getCompanyLogo());
//            statement.setString(5, item.getUrl());
//            statement.executeUpdate();
//
//            sql = "INSERT IGNORE INTO keywords VALUES (?, ?)";
//            statement = conn.prepareStatement(sql);
//            statement.setString(1, item.getId());
//            for (String keyword : item.getKeywords()) {
//                statement.setString(2, keyword);
//                statement.executeUpdate();
//            }
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//
//    }
}
