package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class MySQLTableCreation {
    public static void main(String[] args) {
        try {
            // Step 1 Connect to MySQL.
            System.out.println("Connecting to" + MySQLDBUtil.URL);
            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
            Connection conn = DriverManager.getConnection(MySQLDBUtil.URL);

            if (conn == null) {
                return;
            }

            //Step 2 Drop tables in case they exist.
            Statement statement = conn.createStatement();


            String sql = "SET foreign_key_checks = 0";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS reservations";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS events";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS maintenance";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS users";
            statement.executeUpdate(sql);

            sql = "SET foreign_key_checks = 0";
            statement.executeUpdate(sql);

            //Step 3 Create new tables : user , reservations, maintenance, events
            //users:
            sql = "CREATE TABLE users ("
                    + "user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,"
                    + "password VARCHAR(255) NOT NULL,"
                    + "first_name VARCHAR(255),"
                    + "last_name VARCHAR(255),"
                    + "unit_num INT,"
                    + "email VARCHAR(255),"
                    + "phone VARCHAR(255),"
                    + "user_type VARCHAR(255),"
                    + "PRIMARY KEY (user_id)"
                    + ")";
            statement.executeUpdate(sql);

            // reservations
            sql = "CREATE TABLE reservations ("
                    + "reservation_id INT UNSIGNED NOT NULL AUTO_INCREMENT,"
                    + "user_id INT UNSIGNED NOT NULL,"
                    + "reservation_date DATE NOT NULL,"
                    + "reservation_time VARCHAR(255),"
                    + "amenity VARCHAR(255),"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (reservation_id),"
                    + "FOREIGN KEY (user_id) REFERENCES users(user_id)"
                    + ")";
            statement.executeUpdate(sql);

            // maintenance
            sql = "CREATE TABLE maintenance ("
                    + "maintenance_id INT UNSIGNED NOT NULL AUTO_INCREMENT,"
                    + "report_user_id INT UNSIGNED NOT NULL,"
                    + "staff_id INT UNSIGNED NOT NULL,"
                    + "request_content VARCHAR(255),"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (maintenance_id),"
                    + "FOREIGN KEY (report_user_id) REFERENCES users(user_id),"
                    + "FOREIGN KEY (staff_id) REFERENCES users(user_id)"
                    + ")";
            statement.executeUpdate(sql);
            // events
            sql = "CREATE TABLE events ("
                    + "event_id INT UNSIGNED NOT NULL AUTO_INCREMENT,"
                    + "content VARCHAR(255),"
                    + "event_time DATETIME,"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (event_id)"
                    + ")";
            statement.executeUpdate(sql);

            sql = "SET foreign_key_checks = 1";
            statement.executeUpdate(sql);

            //Step 4 Insert fake user
            sql = "INSERT INTO users(password, first_name, last_name, unit_num, email, phone, user_type) VALUES('johnsmith', 'John', 'Smith', '101', 'johnsmith101@gmail.com', '0123456789', 'resident')";
            statement.executeUpdate(sql);

            sql = "INSERT INTO users(password, first_name, last_name, email, phone, user_type) VALUES('emmasmith', 'Emma', 'Smith', 'emmasmith101@gmail.com', '9876543210', 'admin')";
            statement.executeUpdate(sql);

            sql = "INSERT INTO reservations(user_id, reservation_date, reservation_time, amenity, status, created_at) VAlUES('1', '2021-07-26', '09:00:00', 'Common Room', 'unapproved', current_timestamp())";
            statement.executeUpdate(sql);

            sql = "INSERT INTO reservations(user_id, reservation_date, reservation_time, amenity, status, created_at) VAlUES('1', '2021-07-28', '10:00:00', 'Swimming Pool', 'unapproved', current_timestamp())";
            statement.executeUpdate(sql);

            sql = "INSERT INTO reservations(user_id, reservation_date, reservation_time, amenity, status, created_at) VAlUES('1', '2021-07-26', '11:00:00', 'Common Room', 'unapproved', current_timestamp())";
            statement.executeUpdate(sql);

            conn.close();
            System.out.println("Import done successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

