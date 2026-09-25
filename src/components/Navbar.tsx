const Navbar = () => {
    return (
        <nav  className="container mx-auto flex justify-between justify-content text-2xl items-center p-4 bg-gray-100 text-black">
<div><img className="h-10" src="/src/assets/logo-text.png" alt="logo" /></div>
<div>
<ul className="flex space-x-4">
    <li className="text-red-500">Home</li>
    <li>Technologies</li>
    <li>Projects</li>
    <li>About</li>
    <li>Contact</li>
</ul>
</div>
<div className="flex space-x-4">
    <p>Sign in</p>
<button className="btn btn-active btn-secondary">Sign UP</button>
    </div>

        </nav>
    );
};

export default Navbar;