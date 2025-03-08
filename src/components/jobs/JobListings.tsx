
import { useState } from "react";
import { jobListings, jobCategories, experienceLevels } from "@/data/jobListings";
import { Job, ExperienceLevel } from "@/types/job";
import SectionHeading from "@/components/common/SectionHeading";
import JobCard from "@/components/jobs/JobCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const JobListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobListings.filter((job) => {
    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory;
    const matchesExperience = selectedExperience === "All Levels" || job.experienceLevel === selectedExperience;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesExperience && matchesSearch;
  });

  return (
    <div className="bg-gray-50 py-16" id="job-listings">
      <div className="container-custom">
        <SectionHeading 
          title="Open Positions" 
          subtitle="Explore our current job openings and find your perfect role"
          alignment="center"
        />

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto w-full flex items-center justify-center"
            >
              <Filter size={18} className="mr-2" />
              Filters {showFilters ? "▲" : "▼"}
            </Button>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-md shadow-sm mb-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Tabs defaultValue="All Categories" onValueChange={setSelectedCategory} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 h-auto">
                      {jobCategories.map((category) => (
                        <TabsTrigger key={category} value={category} className="text-xs md:text-sm py-2">
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Experience Level</label>
                  <Tabs defaultValue="All Levels" onValueChange={setSelectedExperience} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
                      {experienceLevels.map((level) => (
                        <TabsTrigger key={level} value={level} className="text-xs md:text-sm py-2">
                          {level}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">No jobs matching your criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory("All Categories");
                setSelectedExperience("All Levels");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
