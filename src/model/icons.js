// Model for icons.
const Icons = () => {
    let _icons = new Map();

    // Init the icons.
    const init = () => {
        _icons = new Map();
    }

    // Return all icons.
    const get = () => {
        return _icons;
    }

    // Return the icon for the given key.
    const getIcon = (key) => {
        return _icons.get(key) || null;
    }

    // Check if the icon for the given key exists.
    const exist = (key) => {
        return _icons.has(key);
    }

    // Add the icon for the given key.
    const add = (key, value) => {
        if (!exist(key)) {
            _icons.set(key, value);
        }
    }

    // Serialize the icons.
    const serialize = () => {
        localStorage.setItem("icons", JSON.stringify(Array.from(_icons.entries())));
    }

    // Deserialize the icons.
    const deserialize = () => {
        const data = localStorage.getItem("icons");
        if (data) {
            try {
                _icons = new Map(JSON.parse(data));
            } catch (error) {
                _icons = new Map();
                console.log("Error deserializing icons.", error);
            }
        }
    }

    deserialize();

    return { init, get, getIcon, exist, add, serialize };
}

const icons = Icons();

export default icons;