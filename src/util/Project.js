class Project {
    constructor(title, description, techArr, url, role, github) {
        this.title = title;
        this.description = description;
        this.tech = [...techArr];
        this.url = url;
        this.role = role;
        this.github = github
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getUrl() {
        return this.url;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

const getProject = async function (e) {
    e.preventDefault();

    var title;
    var description;
    var techArr;
    var url;
    var role;
    var github;

    let project;

    switch (e.target.getAttribute("data-title")) {
        case "moods":
            title = "#Moods";
            description = `#Moods is a social media based platform focused on sharing music and your thoughts on certain songs. The app will feature the ability to listen to music and add songs to playlists. You will also be able to write note entries almost like diary entries or posts on social media. The notes will be able to be linked to a song of your choice if you choose to so when you later look at notes, you can listen to that song again easily. You can add friends and view their posts as well as chat (direct messages currently in developement).`;
            techArr = ["JavaScript", "Handlebars.js", "Express.js", "Sequelize ORM", "Bulma CSS", "Bcrypt", "Socket.io", "Express-sessions"];
            url = "https://lychee-sundae-06249.herokuapp.com/";
            role = "Responsible for creating data organization and flow, all social media aspects, and overall CSS design."
            github = "https://github.com/NDHR-Magic/Socializing-The-Web";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "stiegman-lab":
            title = "Stiegman Lab Database";
            description = `Site and database for the Stiegman Lab at Florida State University (FSU) Chemistry Department. Requires current member to register new accounts (guests cant register themselves).
                Update: Only currently will be used as a database for lab chemicals. Informational site will be deployed through university (WIP).`
            techArr = ["JavaScript", "Handlebars.js", "Sequelize"];
            url = "https://stiegman-lab.herokuapp.com/"
            github = "https://github.com/nmp14/Tony-Doesnt-Care";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "budge-grub":
            title = "BudgeGrub";
            description = `An app to help you list budget as well as find restaurants suitable for your price range! Simply enter your monthly net income and current location (or a location you may wish to move to). You will be provided an expense form that will allow you to add an expense to a list that will be deducted from your budget. At any time after you provide an income and location, you can request a list of a few restaurants near that location.`;
            techArr = ["JavaScript", "Bootstrap CSS", "Anime.css", "Jquery", "Local storage", "Yelp API"];
            url = "https://www.youtube.com/watch?v=RPriWCY9QIw";
            role = "Responsible for retrieving form input, updating budget and querying the Yelp API with current budget info."
            github = "https://github.com/BudgeGrub/Budgegrub";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "ani-moves":
            title = "AniMoves";
            description = `WIP clone of myanimelist.org for keeping track of my own anime and movies all in one app. Can register and add animes / movies that are in the database to a favorite lists or to watch list. Primarily for practice with Mongoose ODM.
        Not deployed yet`;
            techArr = ["JavaScript", "Mongoose ODM", "Express.js", "Particles.js"];
            url = "#";
            github = "https://github.com/nmp14/Anime_list";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "blog-posts":
            title = "BlogPosts";
            description = "A webapp for creating and reading otherss blog posts. You can register/login to create your own posts or comment on other user posts. A guest user can still read through blogs but won't be able to comment.";
            techArr = ["JavaScript", "Sequelize", "Express.js", "Bulma CSS"];
            url = "https://blog-posts-nmp14.herokuapp.com/";
            github = "https://github.com/nmp14/tech_blog";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "employee-directory":
            title = "Employee Directory";
            description = "A react app for generating a table of cards for randomly generated users. The cards will display the employees name, email, phone number, and photo. As a user of the app, you can sort the cards by first or last name, as well as filter employees by name.";
            techArr = ["React.js", "Node.js", "Axios"];
            url = "https://nmp14.github.io/Employee-Directory/";
            github = "https://github.com/nmp14/Employee-Directory";
            project = await displayProject(title, description, techArr, url, role, github);
            break;
        case "code-pub":
            title = "Code Pub";
            description = `A mock site of a restaurant made with react.js and redux to manage the states. Code Pub features user login authentication with json web tokens and the ability to purchase goods from our merch store.
            The store currently uses ssandbox mode for PayPal checkout. We post events that users can sign up for as see a list of their events on their profile page. Users can also use our fun drink app that features a random drink generator using The Cocktail API, as well as a drink roulette wheel.
            Checkout our menu as well. PayPal sandbox requires test info (Can't use your own credentials)`;
            role = "Created design of site and database. Created merch store and drink app section. Created authentication with json web tokens. Began admin utilities"
            techArr = ["React.js", "Redux", "Redux-thunk", "Multer", "PayPal", "Node.js", "JavaScript", "Sequelize ORM", "jsonwebtokens npm", "axios", "framer-motion"]
            url = "https://code-pub.herokuapp.com/";
            github = "https://github.com/NDHR-Magic/Code-Pub";
            project = await displayProject(title, description, techArr, url, role, github);
        default:
        //NO
    }

    return project;
}

// Display selected project info
const displayProject = (title, description, techArr, url, role = "Individual project", github) => {
    // Scroll to top
    document.getElementById("top").scrollIntoView();

    // Create project 
    const ProjectToDisplay = new Project(title, description, techArr, url, role, github);

    return ProjectToDisplay;
}

export default getProject;