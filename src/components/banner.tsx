import { Icons } from './icons';

export default function Banner() {
  return (
    <section className=" border-b border-gray-200  px-12 py-4">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center justify-center gap-1.5 transition hover:opacity-75">
          <Icons.progress className="h-10 w-10" />
          <div className="block">
            <h3 className="text-sm/none font-bold">On Progress</h3>

            <span aria-hidden="true" role="img">
              Subscribe to get 50% 0FF till 31st Dec
            </span>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="flex-none rounded-full px-3.5 py-1 text-sm font-semibold text-black underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
