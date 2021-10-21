

import React from "react";

export default function Resume() {
	return (
		<div>
			< div className="px-4 py-5 my-5 text-center">
				<img
					className="d-block mx-auto mb-4"
					src="../assets/Elephant.jpg"
					alt=""
					width="400"
					height="400"
				></img>
				<h1 className="display-5 fw-bold">Resume</h1>
				< div className="col-lg-6 mx-auto">
					<p className="lead mb-4">
						Below is a quick downloable button to download my Resume. you can either download it via. Microsoft Word or PDF.
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<a href="../assets/KarimGomezResume.pdf" download="../assets/KarimGomezResume.pdf" >
							<button
								type="button"
								className="btn btn-primary btn-lg px-4 gap-3"
							>
								Download .docx
							</button>
						</a>
						<button
							type="button"
							className="btn btn-outline-secondary btn-lg px-4"
							href="../assets/KarimGomezResume.pdf"
						>
							Download PDF
						</button>
					</div>
				</div>
			</div>

		</div>
	);
}