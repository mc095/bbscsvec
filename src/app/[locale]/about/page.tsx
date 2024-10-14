import { Flex, Heading } from "@/once-ui/components";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import StudentProfileCard from "@/components/about/StudentProfileCard";
import styles from "@/app/[locale]/about/about.module.scss";
import azmatimg from "@/app/[locale]/about/team/azmat.jpg";
import rasmithaimg from "@/app/[locale]/about/team/rasmitha.jpg"; // Import avatar images directly
import sripadimg from "@/app/[locale]/about/team/sripada.jpg";
import akashimg from "@/app/[locale]/about/team/akash.jpg";
import jayakimg from "@/app/[locale]/about/team/jayakanth.jpg";
import mohanimg from "@/app/[locale]/about/team/mohan.jpg";
import madhurimg from "@/app/[locale]/about/team/madhur.jpg";
import pallavimg from "@/app/[locale]/about/team/pallavi.jpg";
import supriyaimg from "@/app/[locale]/about/team/supriya.jpg";
import vishnuimg from "@/app/[locale]/about/team/vishnu.jpg";
import tejasimg from "@/app/[locale]/about/team/tejaswini.jpg";
import praskimg from "@/app/[locale]/about/team/praskum.jpg";
import madhanimg from "@/app/[locale]/about/team/madhan.jpg"; // Adjust imports based on your file structure
import fathimaimg from "@/app/[locale]/about/team/fathima.jpg";
import ganeshimg from "@/app/[locale]/about/team/ganesh.jpg";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000";

export default function StudentProfiles({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations();

  const students = [
    {
      name: "Prasanna Kumar",
      role: "Maverick",
      github: "https://github.com/RAPARLAPRASANNAKUMAR",
      linkedin: "https://www.linkedin.com/in/prasanna-kumar-raparla-712a25247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      avatarUrl: praskimg.src, // Directly use the imported image
    },
    {
      name: "Sai Akash",
      role: "Maverick",
      github: "https://github.com/PYDIPALA-SAI-AKASH",
      linkedin: "https://www.linkedin.com/in/sai-akash-pydipala-932167256",
      avatarUrl: akashimg.src,
    },
    {
      name: "Rasmitha Lekha",
      role: "Secretary",
      github: "https://github.com/rambha7024",
      linkedin: "https://www.linkedin.com/in/rambha-rasmitha-lekha-40a2b9294/",
      avatarUrl: rasmithaimg.src,
    },
    {
      name: "Ganesh",
      role: "Technical Lead",
      github: "https://github.com/mc095",
      linkedin: "https://www.linkedin.com/in/ganesh097/",
      avatarUrl: ganeshimg.src,
    },
    {
      name: "Vishnu Vardhan",
      role: "Non - Technical Lead",
      github: "https://github.com/challavishnu123",
      linkedin: "https://www.linkedin.com/in/vishnu-challa-35b45727a/",
      avatarUrl: vishnuimg.src,
    },
    {
      name: "Supriya",
      role: "Lead",
      github: "https://github.com/Supriya-Uchinthala",
      linkedin: "https://www.linkedin.com/in/supriya-uchinthala",
      avatarUrl: supriyaimg.src,
    },
    {
      name: "Fathima",
      role: "Lead",
      github: "https://github.com/AashimaFathima",
      linkedin: "https://www.linkedin.com/in/shaik-aashima-fathima-494b82256/",
      avatarUrl: fathimaimg.src,
    },
    {
      name: "Madhan",
      role: "Lead",
      github: "https://github.com/crazy0codes",
      linkedin: "https://www.linkedin.com/in/madhan-panja-bba021290",
      avatarUrl: madhanimg.src,
    },
    {
      name: "Sripada",
      role: "Co-Lead",
      github: "https://github.com/JokerSripadha",
      linkedin: "https://www.linkedin.com/in/sripadha-kakani-a8803b2a0/",
      avatarUrl: sripadimg.src,
    },
    {
      name: "Pallavi",
      role: "Lead",
      github: "https://github.com/pallavidurga",
      linkedin: "https://www.linkedin.com/in/pallavi-durga-katta-19788928a/",
      avatarUrl: pallavimg.src,
    },
    {
      name: "Madhur",
      role: "Lead",
      github: "https://github.com/MadhurAchanta",
      linkedin: "https://www.linkedin.com/in/madhur-achanta-693b0b28a/",
      avatarUrl: madhurimg.src,
    },
    {
      name: "Azmath",
      role: "Lead",
      github: "https://github.com/Azmat1291",
      linkedin: "https://www.linkedin.com/in/mohammad-azmatulla-b6b67b2b5/",
      avatarUrl: azmatimg.src,
    },
    {
      name: "Tejaswini",
      role: "Co-Lead",
      github: "https://github.com/tejaswinieedara",
      linkedin: "https://www.linkedin.com/in/eedara-tejaswini-8607302aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      avatarUrl: tejasimg.src,
    },
    {
      name: "Mohan",
      role: "Lead",
      github: "https://github.com/mohanreddypadala",
      linkedin: "https://www.linkedin.com/in/mohan-reddy-padala-526716294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      avatarUrl: mohanimg.src,
    },
    {
      name: "Jaykanth",
      role: "Co-Lead",
      github: "https://github.com/Vemulurijayakanth",
      linkedin: "http://linkedin.com/in/jaya-kanth-vemuluri-260501271",
      avatarUrl: jayakimg.src,
    },
  ];

  const profileSections = [
    {
      title: "Lead & Co-Lead",
      profiles: [students[0], students[1]],
    },
    {
      title: "Secretary",
      profiles: [students[2]],
    },
    {
      title: "Technical and Non-Technical Leads",
      profiles: [students[3], students[4]],
    },
    {
      title: "Machine Learning and Deep Learning",
      profiles: [students[5]],
    },
    {
      title: "Generative AI and Prompt Engineering",
      profiles: [students[6]],
    },
    {
      title: "Web and App Development",
      profiles: [students[7], students[8]],
    },
    {
      title: "Cloud Computing",
      profiles: [students[9]],
    },
    {
      title: "Event Management",
      profiles: [students[10]],
    },
    {
      title: "Public Relations",
      profiles: [students[11], students[12]],
    },
    {
      title: "Creative Design & Social Media Management",
      profiles: [students[13], students[14]],
    },
  ];

  return (
    <Flex
      fillWidth
      maxWidth="l"
      direction="column"
      alignItems="center"
      padding="xl"
      background="transparent" // Change to transparent to avoid gray background
    >
      <Heading
        as="h1"
        variant="display-strong-xl"
        onBackground="neutral-weak"
        marginBottom="xl"
      >
        {t("studentProfiles.title")}
      </Heading>
      {profileSections.map((section, index) => (
        <Flex
          key={index}
          direction="column"
          alignItems="center"
          marginBottom="xl"
        >
          <Heading
            as="h1"
            className={styles.sectionTitle} // Use CSS module class
            onBackground="neutral-weak"
          >
            {section.title}
          </Heading>
          <Flex
            wrap
            justifyContent="center"
            gap="l" // Maintain some gap between cards
          >
            {section.profiles.map((student, index) => (
              <StudentProfileCard
                key={index}
                name={student.name}
                role={student.role}
                github={student.github}
                linkedin={student.linkedin}
                avatarUrl={student.avatarUrl} // Pass the imported avatar image // Pass the imported avatar image
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const title = t("studentProfiles.title");
  const description = t("studentProfiles.description");
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/student-profiles`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
