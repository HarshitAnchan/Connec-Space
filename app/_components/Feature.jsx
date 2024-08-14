import { FaUsers, FaCogs, FaComments } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose ConnecSpace?
          </h2>

          <p className="mt-4 text-gray-300">
            Explore the features that make ConnecSpace the perfect choice for
            your collaborative needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <FaUsers className="text-4xl text-pink-500" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Real-Time Collaboration
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Work together on documents, tasks, and projects in real time, no
              matter where you are. Seamlessly share and edit content with your
              team.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <FaCogs className="text-4xl text-pink-500" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Customizable Workspaces
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Tailor your work environment to fit your needs. Create, organize,
              and manage workspaces that align with your team’s workflow.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <FaComments className="text-4xl text-pink-500" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Integrated Communication
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Keep conversations in context with built-in chat, and comment
              threads. Never lose track of important discussions.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
