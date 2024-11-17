interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div>
    <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
  </div>
);

export default Header;
