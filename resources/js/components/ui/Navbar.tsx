import { Settings } from 'lucide-react';
import { UserRoundCog } from 'lucide-react';
import { LogOut } from 'lucide-react';

function Navbar() {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content rounded-md mb-12">
                <div className="flex-1">
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control text-black">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                            <li><a> <UserRoundCog /> Profile</a> </li>
                            <li><a> < Settings /> Settings</a></li>
                            <li><a href='/'> <LogOut /> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar