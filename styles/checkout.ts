import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    paymentContainer: {
        flexGrow: 25
    },
    listContainer: {
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: '#F9F9F9',
        // justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 7,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    listItem: {
        flexDirection: "row",
    },
    listItemImg: {
        width: 40,
        height: 40
    },
    subTotal: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5
    },
    totalPreview: {
        flexGrow: 1,
        borderRadius: 7,
        backgroundColor: '#F9F9F9',
        padding: 15,
        justifyContent: 'flex-end'
    },
});

export default styles;
