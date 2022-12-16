import React from 'react';
import {Android, Apple, Cyborg, DecisionProcess, FavList, Messaging, Note, ThumbUp, World2} from "./FeatureIcons";

export default function Summary() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Fully native, cross-platform, shared UI.</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
