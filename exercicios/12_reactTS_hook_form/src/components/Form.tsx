import { useForms } from "../hooks/useForms"
import { FormSchema } from "../schemas/formSchema"

const Form = () => {

    const { register, handleSubmit, errors } = useForms();
    const onSubmit = (data: FormSchema) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="w-96 bg-white p-4 rounded-md border border-slate-300">
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="digite o seu nome"
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.name && (<small className="text-red-500 italic"> {errors.name.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="lastname">Sobrenome:</label>
                <input
                    type="text"
                    id="lastname"
                    {...register("lastname")}
                    placeholder="digite o seu sobrenome"
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.lastname && (<small className="text-red-500 italic"> {errors.lastname.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="gender">Gênero:</label>
                <select id="gender" {...register("gender")} className="h-10 pl-1 border border-slate-300">
                    <option value="select">Selecione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    <option value="other">Outro</option>
                </select>
                {errors.gender && (<small className="text-red-500 italic"> {errors.gender.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="digite o seu email"
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.email && (<small className="text-red-500 italic"> {errors.email.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                    placeholder="digite a sua senha"
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.password && (<small className="text-red-500 italic"> {errors.password.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="comfirmpassword">Comfirmação de senha:</label>
                <input
                    type="password"
                    id="comfirmpassword"
                    {...register("comfirmpassword")}
                    placeholder="comfirme a sua senha"
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.comfirmpassword && (<small className="text-red-500 italic"> {errors.comfirmpassword.message} </small>)}
            </div>

            <div className="flex flex-col gap-2 mb-2">
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        id="agree"
                        {...register("agree")}
                    />
                    <label htmlFor="agree">Concordar com os termos:</label>
                </div>
                {errors.agree && (<small className="text-red-500 italic"> {errors.agree.message} </small>)}
            </div>

            <button
                type="submit"
                className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all">
                Cadastrar
            </button>
        </form>
    )
}

export default Form