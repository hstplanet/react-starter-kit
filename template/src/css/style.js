import color from "./color"

export default {

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingVertical: 20
    },

    innerContainer: {
        width: '75%',
    },

    input: {
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: color.grey
    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
    },

    h1: {
        fontSize: 36,
        textAlign: 'center',
        color: color.fontColor
    },
    h2: {
        fontSize: 26,
        textAlign: 'center',
        color: color.fontColor
    },
    h3: {
        fontSize: 20,
        color: color.fontColor
    },
    row: {
        flexDirection: "row"
    }

}