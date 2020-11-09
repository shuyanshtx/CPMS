package backend.db;

public class MySQLDBUtil {
    private static final String INSTANCE = "cpms-instance.cwlklefwchrb.us-west-1.rds.amazonaws.com";
    private static final String PORT_NUM = "3306";
    public static final String DB_NAME = "cpms";
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "TEAM1_cpms";
    public static final String URL = "jdbc:mysql://"
            + INSTANCE + ":" + PORT_NUM + "/" + DB_NAME
            + "?user=" + USERNAME + "&password=" + PASSWORD
            + "&autoReconnect=true&serverTimezone=UTC";
}
