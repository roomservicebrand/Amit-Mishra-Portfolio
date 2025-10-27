
import React, { useState, useRef, lazy, Suspense } from 'react';

const PublicationModal = lazy(() => import('./PublicationModal'));

// Type definition for a publication
interface Publication {
    logo: string;
    publicationName: string;
    description: string;
    link: string; // Keep link for potential future use, but don't use it now
    thumbnail: string;
}

const articleContents: Record<string, string> = {
  "Nova Recovery Center": `<h3>Reclaiming Life from Heroin and Alcohol Addiction</h3><p>Amit grew up in a home with two loving and supportive parents, but the older he got, the more disengaged from society he became. Convinced that his youth was the time to have fun and take risks, Amit slowly began to stray from his homegrown values and started drinking and smoking weed. Eventually, that wasn't enough anymore, and he began searching for something more.</p><p>"I had several friends who wouldn't stick around if drugs were in the environment, but I was the opposite," he said. "I was never scared to try something more. I was always chasing the possibility that something would make me feel even better."</p><p>That chase led Amit straight into the grip of heavy addiction. He became fully dependent on prescription drugs and pain medication. Although his parents knew his behavior was a problem, they had never been exposed to addiction and didn't know how to deal with it. They just assumed that one day he would grow out of it. So, Amit's chase continued.</p><h3>Complete Powerlessness</h3><p>Amit spent years living at his parents' house, mooching off them. He was lazy, entitled, and felt like he deserved all these things without having to work for them. During this time, his addiction worsened, and he spent some time in and out of jail. He felt extremely alienated but deep down he knew that his drug abuse was the problem.</p><p>"Every time I got out of prison, I had to change the way I felt about myself," he said. "I'd say, 'I'll just smoke weed' or 'I'll just drink alcohol' hoping my addiction would fade, but that was never the case."</p><p>Amit was completely powerless to his addiction. It wasn't long before he was introduced to heroin and immediately became hooked. His fear of needles couldn't keep him from chasing the next best feeling.</p><p>"I will never forget the feeling," he said. "It made everything okay. Once I got a taste of that needle, it didn't matter who I was going to hurt, who I was going to steal from, how many jobs I was going to lose. None of that mattered. I had to get high."</p><h3>Trapped in a Vicious Cycle</h3><p>Drugs and alcohol had completely consumed Amit's life. He was in and out of rehab, trapped in a vicious cycle that always started with a treatment center and ended with a needle in his arm. After a four-month run of continuous heavy drug use, Amit was kicked out of his sober living home and suddenly found himself homeless and alone.</p><p>"In that moment, I really felt like I met God because it was just me and my maker in my car," he said. "I'm not an emotional person, but I was crying, pissed off, punching the steering wheel...I didn't know what else to do." He had a little bit of money left so he went and bought some heroin, thinking, "Whatever happens, happens. If I don't wake up, I'll be doing myself and the world a favor because I'm nothing but a burden."</p><h3>A Humbling Experience Gives Way to True Freedom</h3><p>Somehow Amit survived his heroin binge. Shortly after, he was contacted by an old friend who was in recovery. His friend drove him to a hospital in Dallas where he detoxed and doctors recommended Amit enroll in 90-day treatment. A friend of the family recommended Nova Recovery Center.</p><p>"Nova was different," he said. "They didn't let up on me one bit. The staff was able to show me the truth about myself and why I can't stay sober." During his 90 days at Nova, Amit pushed through the pain and was humbled. He worked with the staff to really understand and apply the 12 steps to his life.</p><p>After completing his rehab at Nova, Amit moved into a sober living home in Austin and continued working the 12-step program. He accepted a position with BRC Recovery, where he currently works as a House Manager at a sober living home.</p><p>"There is absolutely a way out [of addiction]," Amit says. "I was dying. But if recovery was possible for me, it's absolutely possible for anyone."</p>`,
  "BRC Healthcare": `<h3>#FeatureFriday: Everyone meet Amit Mishra</h3><p>Amit Mishra, Segue Recovery Coach, PRSS. Amit was born in Ann Arbor, Michigan. He moved to Dallas at a young age and quickly started getting in trouble. Amit was never content with life, but he did find sports to be a healthy outlet for all his excess energy. Amit began using drugs and alcohol in high school and that quickly escalated in college. Things ultimately got out of control.</p><p>"My family was unsure of how to handle my drug abuse, and I began the cycle of going in and out of treatment centers. Each time I entered one of these facilities, I did want to get sober, but I never obtained an adequate solution and I would return to drugs and alcohol, seemingly against my own will." In 2016, Amit was intervened on and sent to a treatment center just outside of Austin, TX where he was exposed to a program of action that offered the solution.</p><p>"There, I met mentors who taught me this work and who I still look up to today. My greatest gift is being able to help others today and spread the message I was so freely given. I have worked various positions throughout BRC and each position I have held is a different blessing. I can honestly say I love my job and coming to work for this amazing company each day."</p>`,
  "HeartWater": `<h3>Pour Your Heart Out: Amit's Story</h3><p>"Originally from Ann Arbor, MI. Growing up, my parents worked hard and provided me with everything I needed and more. At a young age I moved to Dallas, TX. I instantly knew I was home. I was a bright, intelligent, and funny kid. I was always told by others that 'I had potential'. Some would strive to reach that potential but unfortunately it always left me in a place of defeat. Because of defeat, I almost always felt alone.</p><p>I spent my childhood playing sports and as hard as I tried, my mind always told me it wasn't good enough. I started getting in trouble with the law at a very early age by shop lifting. Breaking the rules always gave me the rush I was looking for.</p><p>As I got older I started using PEDs, smoking marijuana and drinking beer. Drugs and alcohol finally gave me the temporary relief I was looking for. I thought it was all fun and games. I watched many of my friends and family go off and do wonderful things with their lives and I was stuck in the same place.</p><p>Gradually, my drug and alcohol use started to progress. I found myself taking prescription medications that did not belong to me and my family and friends started to notice. I discovered intravenous heroin use for the first time and my addiction sky rocketed everyday after that. The next few years, I went in and out of jail/prison. It seemed as if that was the only life I'd ever live. I joined a gang and went from someone who was raised right to someone who was completely lost.</p><p>All of this was a result of not taking direction from others that knew what they were talking about. In 2016, I couldn't handle this way of life anymore and tried to purposefully overdose. I woke up the next day and realized I was still alive for a reason and reached out to a close friend who helped me find the treatment I needed in Austin, TX. I've been sober everyday since and life has been challenging but fulfilling at the same time. I spend my days helping others in ways I never thought were possible. Turns out I never was alone and that God was with me my entire life. I just had to reach for him!" - Amit M.</p>`
};

const PublicationCard: React.FC<{
    logo: string;
    publicationName: string;
    description: string;
    delay: number;
    thumbnail: string;
    onReadMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ logo, publicationName, description, delay, thumbnail, onReadMore }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group" data-aos="fade-up" data-aos-delay={delay}>
      <div className="block h-48 overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={thumbnail} alt={publicationName} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 bg-white h-10 w-10 rounded-full flex items-center justify-center p-1 shadow-sm">
                <img className="max-h-full max-w-full object-contain" src={logo} alt={`${publicationName} logo`} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {publicationName}
            </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
             <button 
                onClick={onReadMore}
                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center text-left"
            >
                Read The Feature <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
      </div>
    </div>
);


const publications: Publication[] = [
  {
    logo: "https://i.postimg.cc/mg5mcP5d/IMG-4113.jpg",
    thumbnail: "https://i.postimg.cc/jjrCsX41/IMG-4126.jpg",
    publicationName: "Nova Recovery Center",
    description: "Featured in 'Stories Of Addiction Recovery,' sharing my personal journey from struggle to finding true freedom from addiction.",
    link: "https://www.novarecoverycenter.com/addiction-recovery-stories/amit-mishras-story/",
  },
  {
    logo: "https://i.postimg.cc/4xSWKYSF/IMG-4111.jpg",
    thumbnail: "https://i.postimg.cc/1zZ49Hrb/IMG-4124.jpg",
    publicationName: "BRC Healthcare",
    description: "A #FeatureFriday spotlight on my role and journey as a Segue Recovery Coach with the BRC Healthcare family.",
    link: "https://brchealthcare.com/blog/featurefriday-amit-mishra-segue-recovery-coach/"
  },
  {
    logo: "https://i.postimg.cc/T34tyK47/IMG-4114.jpg",
    thumbnail: "https://i.postimg.cc/HLCjp29K/IMG-3701.jpg",
    publicationName: "HeartWater",
    description: "A feature sharing insights on recovery and personal growth within the healthcare community.",
    link: "https://www.heartwater.com/blogs/news/pour-your-heart-out-amit",
  }
];

const Publications: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
    const [modalContent, setModalContent] = useState('');
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const handleReadMore = (publication: Publication, event: React.MouseEvent<HTMLButtonElement>) => {
        triggerRef.current = event.currentTarget;
        const content = articleContents[publication.publicationName] || '<p>Article content coming soon.</p>';
        
        setSelectedPublication(publication);
        setModalContent(content);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay to allow animation before clearing data
        setTimeout(() => {
            setSelectedPublication(null);
            setModalContent('');
        }, 300);
    };

    return (
        <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">As Featured In</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Proud to be featured in publications that highlight innovation and personal journeys in healthcare.</p>
                </div>
                <div className={`grid md:grid-cols-${publications.length > 2 ? '3' : '2'} gap-8`}>
                    {publications.map((pub, index) => (
                        <PublicationCard
                            key={pub.publicationName}
                            {...pub}
                            delay={index * 100}
                            onReadMore={(e) => handleReadMore(pub, e)}
                        />
                    ))}
                </div>
            </div>
             {isModalOpen && (
                <Suspense fallback={null}>
                    <PublicationModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        publication={selectedPublication}
                        content={modalContent}
                        triggerRef={triggerRef as React.RefObject<HTMLButtonElement>}
                    />
                </Suspense>
            )}
        </section>
    );
};

export default Publications;