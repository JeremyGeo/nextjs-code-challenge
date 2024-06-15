// src/hooks/useFetchTeam.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        const titles = ['CEO', 'Lead Developer', 'Creative Lead', 'Brand Manager', 'Junior Developer'];
        const expertises = [
          'Web Development, Project Management',
          'Web Development, Software Engineering',
          'UI/UX, Design',
          'UI/UX, Digital Marketing',
          'Software Engineering'
        ];

        const teamData = response.data.results.map((user, index) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          image: user.picture.large,
          title: titles[index],
          expertise: expertises[index],
        }));

        setTeam(teamData);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeam();
  }, []);

  return team;
};

export default useFetchTeam;
