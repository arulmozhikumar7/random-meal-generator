import { Linkedin, Github, Mail, Instagram } from "lucide-react";

const socialLinks = [
    { href: "https://www.linkedin.com/in/arulmozhikumar7", icon: Linkedin },
    { href: "https://github.com/arulmozhikumar7", icon: Github },
    { href: "mailto:arulmozhikumar7@gmail.com", icon: Mail },
    { href: "https://www.instagram.com/arularul_7", icon: Instagram }
];

const Social = () => {
    return (
        <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <IconComponent />
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
