package backend.db;

import java.sql.*;

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

//    public void setFavoriteItem(String userId, Item item) {
//        if (conn == null) {
//            System.err.println("DB connection failed.");
//            return;
//        }
//        saveItem(item);
//        String sql = "INSERT IGNORE INTO favorites (user_id, item_id) VALUES (?, ?)";
//        try {
//            PreparedStatement statement = conn.prepareStatement(sql);
//            statement.setString(1, userId);
//            statement.setString(2, item.getId());
//            statement.executeUpdate();
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//    }
//
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
//
//    public void unsetFavoriteItem(String userId, String itemId) {
//        if (conn == null) {
//            System.err.println("DB connection failed");
//            return;
//        }
//        String sql = "DELETE FROM favorites WHERE user_id = ? AND item_id = ?";
//        try {
//            PreparedStatement statement = conn.prepareStatement(sql);
//            statement.setString(1, userId);
//            statement.setString(2, itemId);
//            statement.executeUpdate();
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//    }
//
//    public Set<String> getFavoriteItemIds(String userId) {
//        if (conn == null) {
//            System.err.println("DB Connection failed");
//            return Collections.emptySet();
//        }
//
//        Set<String> favoriteItemIdsSet = new HashSet<>();
//        String sql = "SELECT item_id FROM favorites WHERE user_id = ?";
//        try {
//            PreparedStatement statement = conn.prepareStatement(sql);
//            statement.setString(1, userId);
//            ResultSet rs = statement.executeQuery();
//            while (rs.next()) {
//                favoriteItemIdsSet.add(rs.getString("item_id"));
//            }
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//
//        return favoriteItemIdsSet;
//    }
//
//    public Set<Item> getFavoriteItems(String userId) {
//        if (conn == null) {
//            System.err.println("DB connection failed");
//            return Collections.emptySet();
//        }
//
//        Set<Item> favoriteItemsSet = new HashSet<>();
//
//        try {
//            Set<String> favoriteItemIds = getFavoriteItemIds(userId);
//
//            for (String itemId : favoriteItemIds) {
//                // for each itemId this user has favorite-d, fetch the Item info from the items table
//                // construct a full Item object and put it into the Set for return
//                // fetch the keywords for that item from the keywords table
//                String sql = "SELECT * FROM items WHERE item_id = ?";
//                PreparedStatement statement = conn.prepareStatement(sql);
//                statement.setString(1, itemId);
//                ResultSet rs1 = statement.executeQuery();
//
//                sql = "SELECT keyword FROM keywords WHERE item_id = ?";
//                statement = conn.prepareStatement(sql);
//                statement.setString(1, itemId);
//                ResultSet rs2 = statement.executeQuery();
//
//                List<String> keywords = new ArrayList<>();
//                while (rs2.next()) {
//                    keywords.add(rs2.getString("keyword"));
//                }
//                if (rs1.next()) {
//                    String title = rs1.getString("title");
//                    String location = rs1.getString("location");
//                    String companyLogo = rs1.getString("company_logo");
//                    String url = rs1.getString("url");
//                    Item.ItemBuilder ib = new Item.ItemBuilder();
//                    Item item = ib.id(itemId).title(title).location(location).companyLogo(companyLogo).url(url).keywords(keywords).favorite(true).build();
//                    favoriteItemsSet.add(item);
//                }
//            }
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//        return favoriteItemsSet;
//    }
}
