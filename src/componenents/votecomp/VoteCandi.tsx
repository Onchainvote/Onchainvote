<<<<<<< HEAD
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VoteCandi({
=======
export default function VoteCandi({
>>>>>>> test-main
  name,
  img,
  party,
  votes,
}: {
  name: string;
  img: string;
  party: string;
  votes: number;
}) {
    useEffect(() => {
      AOS.init();
    }, [])
  
  return (
    <div 
    className="overflow-hidden border rounded-lg shadow-lg"
    data-aos = "flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration = '2000'
    data-aos-delay ='100'>
      {/* Image Section */}
      <div className="relative">
        <img
          src={img}
          alt="{`image of ${name}`}"
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-t-lg hover:scale-105"
        />
      </div>
      {/* Candidate's Name */}
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{name}</h2>
        <p className="mb-2 text-xl font-bold">{party}</p>
        <div className="p-4 mb-2 text-xl font-bold">
          <h3>{votes} votes</h3>
        </div>
      </div>
    </div>
  );
}