import { AboutMe } from "@/types/content";
import commonEs from "../../public/locales/es/common.json";
import commonEn from "../../public/locales/en/common.json";

const getCommonData = (locale: string) => {
    return locale === "es" ? commonEs : commonEn;
};

export const getAboutMeData = (locale: string): AboutMe => {
    const common = getCommonData(locale);
    return {
        name: common.about_name,
        title: common.about_title,
        description: [
            common.about_description_1,
            common.about_description_2,
            common.about_description_3,
        ],
        expertise: [
            common.about_expertise_unity3d,
            common.about_expertise_csharp,
            common.about_expertise_nextjs,
            common.about_expertise_typescript,
            common.about_expertise_react,
            common.about_expertise_nodejs
        ],
        certifications: [
            common.about_certifications_unity_dev,
            common.about_certifications_unity_vr
        ],
        relevantJobs: [
            { title: common.about_job_unity_dev, company: common.about_company_indie_studio, years: 2 },
            { title: common.about_job_fullstack_dev, company: common.about_company_web_agency, years: 3 }
        ],
        skills: [
            common.about_skill_3d_modeling,
            common.about_skill_shader_programming,
            common.about_skill_web_apis,
            common.about_skill_graphql
        ]
    };
};