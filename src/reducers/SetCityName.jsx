var initialValue = '';

const CityName = (state = initialValue, { type, payload }) => {
    switch (type) {
        case "SET_CITY_NAME":
            return payload;
        default: return state;
    }
}

export default CityName;