
const login = async (email, password) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password : password,
        }),
    });
    const data = await response.json();
    if (data.status === 200) {
        return data;
    }
    else {
        return data;
    }
};

const getProfile = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    if (data.status === 200) {
        return data.body;
    }
    else {
        return "error";
    }
};

const updateProfile = async (firstName, lastName, token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    });
    const data = await response.json();
    if (data.status === 200) {
        return data.body;
    }
    else {
        window.location.href = '/login';
    }
};

export { login, getProfile, updateProfile };