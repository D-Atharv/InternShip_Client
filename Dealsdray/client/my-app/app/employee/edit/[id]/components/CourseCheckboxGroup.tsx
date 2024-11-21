interface CourseCheckboxGroupProps {
    selectedCourses: string[];
    onChange: (course: string, isChecked: boolean) => void;
  }
  
  export const CourseCheckboxGroup = ({ selectedCourses, onChange }: CourseCheckboxGroupProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Courses</label>
      <div className="flex items-center space-x-4">
        {["MCA", "BCA", "BSC"].map((course) => (
          <label key={course}>
            <input
              type="checkbox"
              name="courses"
              value={course}
              checked={selectedCourses.includes(course)}
              onChange={(e) => onChange(course, e.target.checked)}
              className="mr-2"
            />
            {course}
          </label>
        ))}
      </div>
    </div>
  );
  