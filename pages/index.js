import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];
function HomePage(props) {
  // getStaticProps er karone amara kono state and useEffect use kora latacena 
  //getstaticProps er karone 
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {

  //   setLoadedMeetups(DUMMY_MEETUPS);

  // }, []);
  return <MeetupList meetups={props.meetups} />;
}


// getServerSideProps

// export async function getServerSideProps() {
//   // fetxh data from API  
//   return { 
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   };

// }



// getStaticProps
export async function getStaticProps() {
  //fetch data from an API
  return{
    props: {
      meetups:DUMMY_MEETUPS
    },
    revalidate:1         //every 10minutes por page render hobe
  }
}

export default HomePage;












// git add .
// git commit -m "afing"
// git push