export default function CreateEmployeeForm() {
    return (
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4 text-white">
        <label className="block mb-4">
          <span className="text-sm">Name</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm">Mobile No</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm">Designation</span>
          <select
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
          >
            <option>HR</option>
            <option>Manager</option>
            <option>Sales</option>
          </select>
        </label>
        <fieldset className="mb-4">
          <legend className="text-sm mb-2">Gender</legend>
          <label className="mr-4">
            <input type="radio" name="gender" value="Male" className="mr-1" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" className="mr-1" /> Female
          </label>
        </fieldset>
        <fieldset className="mb-4">
          <legend className="text-sm mb-2">Courses</legend>
          <label className="mr-4">
            <input type="checkbox" name="courses" value="MCA" className="mr-1" /> MCA
          </label>
          <label className="mr-4">
            <input type="checkbox" name="courses" value="BCA" className="mr-1" /> BCA
          </label>
          <label>
            <input type="checkbox" name="courses" value="BSC" className="mr-1" /> BSC
          </label>
        </fieldset>
        <label className="block mb-4">
          <span className="text-sm">Image Upload</span>
          <input
            type="file"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    );
  }
  