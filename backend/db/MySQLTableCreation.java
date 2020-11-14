package backend.db;

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
            String sql = "DROP TABLE IF EXISTS users";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS maintenance";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS reservations";
            statement.executeUpdate(sql);

            sql = "DROP TABLE IF EXISTS events";
            statement.executeUpdate(sql);

            //Step 3 Create new tables : user , reservations, maintaince, events
            //users:
            sql = "CREATE TABLE users ("
                    + "user_id INT NOT NULL,"
                    + "password VARCHAR(255) NOT NULL,"
                    + "first_name VARCHAR(255),"
                    + "last_name VARCHAR(255),"
                    + "unit_num INT,"
                    + "email VARCHAR(255),"
                    + "phone VARCHAR(255),"
                    + "user_type VARCHAR(255),"
//                    + "created_at TIMESTAMP,"
//                    + "updated_at TIMESTAMP"
                    + "PRIMARY KEY (user_id)"
                    + ")";
            statement.executeUpdate(sql);
            // reservations
            sql = "CREATE TABLE reservations ("
                    + "reservation_id INT NOT NULL,"
                    + "user_id INT NOT NULL,"
                    + "reservation_time DATETIME,"
                    + "amenity VARCHAR(255),"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (reservation_id),"
                    + "FOREIGN KEY (user_id) REFERENCES users(user_id)"
                    + ")";
            statement.executeUpdate(sql);
            //maintaince
            sql = "CREATE TABLE maintaince ("
                    + "maintaince_id INT NOT NULL,"
                    + "report_user_id INT NOT NULL,"
                    + "staff_id INT NOT NULL,"
                    + "request_content VARCHAR(255),"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (maintaince_id),"
                    + "FOREIGN KEY (report_user_id) REFERENCES users(user_id),"
                    + "FOREIGN KEY (staff_id) REFERENCES users(user_id)"
                    + ")";
            statement.executeUpdate(sql);
            //events
            sql = "CREATE TABLE events ("
                    + "event_id INT NOT NULL,"
                    + "content VARCHAR(255),"
                    + "event_time DATETIME,"
                    + "status VARCHAR(255),"
                    + "created_at TIMESTAMP,"
                    + "updated_at TIMESTAMP,"
                    + "PRIMARY KEY (event_id),"
                    + ")";
            statement.executeUpdate(sql);

            //Step 4 Insert fake user
            sql = "INSERT INTO users VALUES('1111', '3229c1097c00d497a0fd282d586be050', 'John', 'Smith', '101', 'johnsmith101@gmail.com', '0123456789', 'resident')";
            statement.executeUpdate(sql);

            sql = "INSERT INTO users VALUES('1112', '3229c1097c00d497a0fd282d586be051', 'Emma', 'Smith', null, 'emmasmith101@gmail.com', '9876543210', 'admin')";
            statement.executeUpdate(sql);

            conn.close();
            System.out.println("Import done successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

