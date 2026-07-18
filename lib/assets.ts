import user_image from '@/assets/user-image.webp';
import code_icon_dark from '@/assets/code-icon-dark.webp';
import edu_icon_dark from '@/assets/edu-icon-dark.webp';
import project_icon_dark from '@/assets/project-icon-dark.webp';
import vscode from '@/assets/vscode.webp';
import firebase from '@/assets/firebase.webp';
import vercel from '@/assets/vercel.webp';
import postgresql from '@/assets/postgresql.webp';
import webstorm from '@/assets/jetbrains-webstorm.webp';
import git from '@/assets/git.webp';
import right_arrow_white from '@/assets/right-arrow-white.webp';
import logo_dark from '@/assets/logo_dark.webp';
import mail_icon_dark from '@/assets/mail_icon_dark.webp';
import profile_img from '@/assets/profile-img.webp';
import download_icon from '@/assets/download-icon.webp';
import hand_icon from '@/assets/hand-icon.webp';
import arrow_icon_dark from '@/assets/arrow-icon-dark.webp';
import menu_white from '@/assets/menu-white.webp';
import close_white from '@/assets/close-white.webp';
import api from '@/assets/api.webp';
import database from '@/assets/database.webp';
import authentication from '@/assets/authentication.webp';
import backend from '@/assets/backend.webp';
import send_icon from '@/assets/send-icon.webp';
import right_arrow_bold_dark from '@/assets/right-arrow-bold-dark.webp';
import github from '@/assets/github-dark.webp';
import linkedin from '@/assets/linkedin.webp';
import twitter from '@/assets/twitter.webp';

export const assets = {
    user_image,
    code_icon_dark,
    edu_icon_dark,
    project_icon_dark,
    vscode,
    webstorm,
    firebase,
    git,
    vercel,
    postgresql,
    right_arrow_white,
    logo_dark,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    arrow_icon_dark,
    menu_white,
    close_white,
    api,
    database,
    authentication,
    backend,
    send_icon,
    right_arrow_bold_dark,
    github,
    linkedin,
    twitter,
};

export const workData = [
    {
        title: 'CyberSecure',
        description: 'Website',
        bgImage: '/work-1.webp',
        link: 'https://cybersecure-one.vercel.app/',
    },
    {
        title: 'HunarGah',
        description: 'Mobile App',
        bgImage: '/work-2.webp',
        link: 'https://github.com/AbdurRehman1299/HunarGah-A-Skillful-Reel-Hub.git',
    },
    {
        title: 'VisionHome AI',
        description: 'Website & AI',
        bgImage: '/work-3.webp',
        link: 'https://roomdev.vercel.app/',
    },
]

export const serviceData = [
    { icon: assets.api, title: 'REST API Development', description: 'Build secure and well-structured REST APIs that connect applications with database and deliver data efficiently...'},
    { icon: assets.database, title: 'Database design', description: 'Design and manage different databases with organized schemas, relationships, and optimized queries for reliable performance...'},
    { icon: assets.authentication, title: 'Authentication & Security', description: 'Implement secure user authentication, JWT-based authorization, and role-based access control to protect applications...'},
    { icon: assets.backend, title: 'Backend architecture', description: 'Develop clean, modular, and maintainable backend systems that are easy to scale and support as applications grow...'},
]

export const infoList = [
    { icon: assets.code_icon_dark, title: 'Languages & Frameworks', description: 'C++, JavaScript, Next.js, React.js, NestJS, Python, Flask' },
    { icon: assets.edu_icon_dark, title: 'Education', description: 'BS in Software Engineering' },
    { icon: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.webstorm, assets.firebase, assets.postgresql, assets.vercel, assets.git
];