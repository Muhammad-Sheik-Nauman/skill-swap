import Sidebar from "../components/Sidebar"

const SkillDashboard = () => {
    return (
        <div className="flex flex-row">
            <div className="flex min-h-screen">
                <Sidebar />
            </div>
            <section className="flex-1 p-4 bg-gray-100 px-8">
                <div className="mx-auto rounded-md w-full p-8 bg-[#83ffee] h-fit">
                    <h1 className="text-2xl font-semibold">Add Skills</h1>
                </div>
                <div className="flex mt-4 mx-4 gap-4">
                    <div className="flex w-full h-full p-4 bg-[#83ffee] rounded-md">
                        <form className="w-full space-y-4">
                            <h2 className="text-xl font-semibold mb-4">Add Your Skills</h2>
                            <div>
                                <label className="block mb-1">Skill Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#e0e0e0]"
                                    placeholder="e.g. JavaScript"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Description</label>
                                <textarea
                                    className="w-full p-2 rounded bg-[#e0e0e0]"
                                    placeholder="Describe your skill"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Credits Required</label>
                                <input
                                    type="number"
                                    className="w-full p-2 rounded bg-[#e0e0e0]"
                                    placeholder="Enter credits required"
                                    min="0"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 rounded hover:bg-[#353535] cursor-pointer"
                            >
                                Add Skill
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillDashboard
