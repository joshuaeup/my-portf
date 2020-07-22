import GeoVane from "./projectImages/testImageSave.GIF";
import HomeBase from "./projectImages/youthSports.PNG";
import ScrapBook from "./projectImages/ScrapBook.PNG";
import RPG from "./projectImages/RPG.PNG";
import ArtGallery from "./projectImages/pageTwoArtGal.PNG";


const Projects = [
    {
        image: GeoVane,
        title: "GeoVane", 
        description: "GeoVane is built to improve the navigational experience, and assure that you reach your desired destination in the safest manner possible. By combining  GPS and your everyday weather application, to deliver all weather predicitons you will face throughout your route.",
        repo: "https://github.com/joshuaeup/Weather-Navigational-App",
        link: "https://geovane-820cc.firebaseapp.com/"
    },
    {
        image: HomeBase,
        title: "Home Base", 
        description: "Home Base allows the everyday working parent to stay involved with everything in their child's sports life. Allowing parents to post images, videos, score and more inside a live updating feed. As well as view schedules, important messages, and stay in the loop of every group discussion. With Home Base you will never miss a game again",
        repo: "https://github.com/joshuaeup/youthSportsAppp",
        link: "https://github.com/joshuaeup/youthSportsApp"
    },
    {
        image: myPortfolio,
        title: "My Portfolio",
        description:
          "My Portfolio was constructed using React.js from start to finish, to encorporate state for each page receving dynamic data. (Experience and Projects). My Portfolio is also fully Mobile Responsive and unique to illustrate creativity",
        repo: "https://github.com/joshuaeup/Portfolio",
        link: "https://joshuaeup.herokuapp.com"
      },
    {
        image: ArtGallery,
        title: "Art Gallery",
        description: "Art Gallery is an application built using React Native. It's purpose is to display my good friends art in a virtual gallery format.",
        repo: "https://github.com/joshuaeup/Art-Gallery",
        link: "https://snack.expo.io/B1wOdhrmG"

    },
    {
        image: ScrapBook,
        title: "ScrapBook", 
        description: "ScrapBook is an application that allows my family to document each location we have visited. Providing the occasion, the date and Upon expanding the image you can view a description of the trip.",
        repo: "https://github.com/joshuaeup/Scrap-Book",
        link: "https://lnj.herokuapp.com/"
    },
    {
        image: RPG,
        title: "RPG", 
        description: "A classic RPG mini game built with jquery",
        repo: "https://github.com/joshuaeup/RPG",
        link: "https://joshuaeup.github.io/RPG/"
    },
]

module.exports = Projects;
