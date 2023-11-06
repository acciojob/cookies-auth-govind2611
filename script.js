function login() {
			let username = document.getElementById("username").value;
			let password = document.getElementById("password").value;
			if (username === "user" && password === "password") {
				document.cookie = "loggedIn=true; max-age=3600";
				showLogout();
			} else {
				alert("Invalid username or password");
			}
		}

		// Show logout button if user is logged in
		function showLogout() {
			let logoutContainer = document.getElementById("logout-container");
			let logoutButton = document.createElement("button");
			logoutButton.id = "logout";
			logoutButton.innerHTML = "Log Out";
			logoutButton.onclick = logout;
			logoutContainer.appendChild(logoutButton);
			logoutContainer.style.display = "block";
		}

		// Log out user and remove cookie
		function logout() {
			document.cookie = "loggedIn=; max-age=0";
			location.reload();
		}

		// Check login status and show logout if logged in
		function checkLoginStatus() {
			let cookies = document.cookie.split("; ");
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i].split("=");
				if (cookie[0] === "loggedIn" && cookie[1] === "true") {
					showLogout();
					break;
				}
			}
		}