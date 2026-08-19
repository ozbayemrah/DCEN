import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoIcon } from '../components/layout/TopBarIcons'
import supportUnion from '../assets/icons/login/union.svg'
import supportUnion1 from '../assets/icons/login/union-1.svg'
import supportDot from '../assets/icons/login/ellipse-309.svg'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <div className="flex min-h-screen">
      <div
        className="relative hidden w-1/2 shrink-0 flex-col items-center justify-center gap-6 px-8 text-center lg:flex"
        style={{
          backgroundImage: 'linear-gradient(160deg, #d3dde5 0%, #eff2f9 60%)',
        }}
      >
        <div className="relative flex size-16 items-center justify-center rounded-full bg-[#1c2632]">
          <LogoIcon />
        </div>
        <h1 className="text-6xl font-bold text-[#1c2632]">
          Welcome to <span>©DCen</span>
        </h1>
        <p className="max-w-2xl text-lg text-[#1c2632]">
          Powering smarter cities through intelligent energy management. ©DCen brings together
          data, infrastructure, and control tools to ensure reliable, efficient, and sustainable
          energy flow.
        </p>
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
          <p className="text-xs text-[#1c2632]">
            ©DCen · Contact · Privacy &amp; Terms · Server Status · Maintenance
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-[#eff2f9]">
        <form onSubmit={handleSubmit} className="flex w-80 flex-col gap-3">
          <h2 className="mb-2 text-2xl font-bold text-[#1c2632]">Login to platform</h2>

          <input
            type="email"
            placeholder="Email"
            required
            className="h-8 rounded-lg border border-[#6e808e] bg-[#e4ebf1] px-2 text-xs text-[#1c2632] placeholder:text-[#6e808e]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="h-8 rounded-lg border border-[#6e808e] bg-[#e4ebf1] px-2 text-xs text-[#1c2632] placeholder:text-[#6e808e]"
          />

          <button
            type="button"
            className="self-end text-xs text-[#1c2632] underline-offset-2 transition-colors duration-150 hover:text-[#6e808e] hover:underline"
          >
            Forgot your password?
          </button>

          <div className="mt-3 flex flex-col gap-3">
            <button
              type="submit"
              className="h-12 rounded-lg border border-[#6e808e] bg-[#1c2632] text-2xl font-bold text-[#eff2f9] transition-colors duration-150 hover:bg-[#2a3646]"
            >
              Login
            </button>
            <button
              type="button"
              className="h-10 rounded-lg border border-[#6e808e] bg-[#e4ebf1] text-2xl text-[#1c2632] transition-colors duration-150 hover:bg-white"
            >
              Login with SSO
            </button>
          </div>

          <button
            type="button"
            className="mt-4 flex items-center justify-center gap-1 text-xs text-[#1c2632] transition-colors duration-150 hover:text-[#6e808e]"
          >
            Contact with IT support
            <span className="relative size-4">
              <span className="absolute inset-[6.25%_26.14%_6.25%_12.5%]">
                <img alt="" className="block size-full" src={supportUnion} />
              </span>
              <span className="absolute inset-[53.13%_6.25%_6.25%_53.13%]">
                <img alt="" className="block size-full" src={supportUnion1} />
              </span>
              <span className="absolute inset-[68.75%_21.88%_21.88%_68.75%]">
                <img alt="" className="block size-full" src={supportDot} />
              </span>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}
