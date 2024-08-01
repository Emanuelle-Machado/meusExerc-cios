import { RepoProps } from "../types/repo"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import classe from './Repo.module.css'

const Repo = ({ name, language, html_url, stargazers_count, forks_count }: RepoProps) => {
    return (
        <div className={classe.repo}>
            <h3>{name}</h3>
            <p className={classe.language}>
                <BsCodeSlash />
                <span>{language}</span>
            </p>
            <div className={classe.stats}>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank" className={classe.repo_btn}>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    )
}

export default Repo