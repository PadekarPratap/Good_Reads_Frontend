import aboutBooksImage from "../../assets/images/aboutimage.webp";
import Logo from "../../assets/images/goodreadslogo.png";
import Team from "../../assets/images/aboutteam.jpg";

const AboutPage = () => {
  return (
    <div className="mt-12 max-w-screen-lg mx-auto px-4 mb-12">
      {/* image container  */}
      <div>
        <img
          src={aboutBooksImage}
          alt="about us header image"
          className="h-96 w-full object-cover object-center"
        />
      </div>

      {/* about us para  */}
      <div className="mt-8">
        <h2 className="flex items-center gap-2">
          <span className="text-xl font-bold">Welcome to </span>
          <img src={Logo} alt="Good Reads Logo" className="w-24" />
        </h2>

        <p className="about-para">
          At Good Reads, we are passionate book lovers, united by our love for
          literature and the written word. Our mission is to create a vibrant
          and inclusive community that celebrates the joy of reading and fosters
          meaningful connections among bibliophiles from all walks of life.
        </p>

        <p className="about-para">
          Our journey began with a simple idea: to bring readers together and
          create a platform where they can discover, discuss, and share their
          favorite books. Whether you&apos;re a seasoned bookworm or just
          starting to explore the world of reading, our organization is here to
          accompany you on your literary adventure.
        </p>

        <p className="about-para">
          As a team of dedicated individuals, we firmly believe in the power of
          books to enlighten minds, spark creativity, and inspire change.
          Through our carefully curated collections, insightful book
          recommendations, and engaging discussions, we aim to foster an
          environment that nurtures intellectual growth and empathy. At Good
          Reads, we understand that diversity enriches our reading experiences.
          Our book selections encompass a wide range of genres, cultures, and
          perspectives, ensuring that every member of our community finds
          something to resonate with. We celebrate the voices of marginalized
          authors and actively promote books that shed light on underrepresented
          issues, aiming to create a more inclusive literary landscape.
        </p>

        {/* team image  */}
        <div>
          <figure>
            <img src={Team} alt="Team Image" className="mx-auto h-96 object-cover" />
            <figcaption className="text-center text-gray-600 italic text-sm" >Our team discussig about the future of Good Reads!</figcaption>
          </figure>
        </div>

        <p className="about-para">
          One of the cornerstones of our organization is the emphasis on
          meaningful interactions among our members. We provide a welcoming
          space for readers to exchange thoughts, share their literary
          discoveries, and engage in lively debates. Through our regular book
          clubs, author interviews, and online events, we encourage dialogue
          that deepens our understanding of the written works and the world they
          reflect. Beyond fostering a love for reading, we believe in the power
          of books to effect positive change in society. With this belief at
          heart, we actively collaborate with various literacy and educational
          initiatives, supporting their efforts to make literature more
          accessible to individuals from all backgrounds. Our organization is
          driven by a team of dedicated volunteers who pour their passion for
          books into every aspect of our community. From curating book lists to
          moderating discussions, they work tirelessly to ensure that Good Reads
          remains a welcoming and enriching space for all.
        </p>

        <p className="about-para">
          We invite you to embark on this literary journey with us, to discover
          new worlds, and to connect with fellow readers who share your love for
          the written word. Whether you&apos;re here to find your next favorite
          book or to engage in thoughtful conversations, we extend a warm
          welcome to you in our ever-growing community of book enthusiasts.
        </p>

        <p className="about-para">
          Thank you for being a part of Good Reads. Together, let&apos;s
          celebrate the magic of storytelling and embark on endless adventures
          through the pages of countless books. Happy reading!
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
