import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  url: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "MikEight",
    role: "Founder",
    description: `MikEight is the visionary founder of FlexFi, leading the team with expertise in commerce, entrepreneurship, and blockchain technology and a passion for innovation.`,
    url: "/logo/moon.webp"
  },
  {
    name: "OMeG7",
    role: "Co-Founder",
    description: `OMeg7 is the co-founder and key strategist, ensuring FlexFi's success with his experience in communications, entrepreneurship and business development.`,
    url: "/logo/moon.webp"

  },
  {
    name: "Raziu",
    role: "Developer",
    description: `Raziu is the developer responsible for the technical backbone of FlexFi, bringing innovative solutions to the platform.`,
    url: "/logo/moon.webp"

  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-gray-900 shadow rounded-xl shadow-lg p-8 flex items-center justify-between max-w-4xl mx-auto mb-8">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-white">{member.name}</h2>
        <h3 className="text-xl font-medium text-gray-400 mb-4">{member.role}</h3>
        <p className="text-gray-500">{member.description}</p>
      </div>
      <div className="flex-shrink-0 ml-6">
        <img
          src={member.url}
          alt={member.name}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="w-full text-center py-10 rounded-3xl mb-10">
      <h1 className="text-4xl font-bold text-white mb-12">Meet the Team</h1>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </section>
  );
};

export default Team;
