"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  summary: string;
  image: string;
  location?: string;
  year?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-12">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-500"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#3B82F6] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#64748B] line-clamp-2">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1628]/95 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[85vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative flex-1 bg-gray-100 min-h-[300px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-96 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
              <span className="text-sm font-bold uppercase tracking-widest text-[#3B82F6] mb-4">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                {selectedProject.title}
              </h2>
              
              <div className="space-y-6 mb-8 flex-1">
                <p className="text-[#64748B] text-lg leading-relaxed">
                  {selectedProject.summary}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Location</div>
                    <div className="font-semibold text-[#1B2A4A]">{selectedProject.location || "Nigeria"}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Year</div>
                    <div className="font-semibold text-[#1B2A4A]">{selectedProject.year || "2024"}</div>
                  </div>
                </div>
              </div>

              <button 
                className="w-full py-4 bg-[#0A1628] text-white rounded-xl font-bold hover:bg-[#3B82F6] transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
