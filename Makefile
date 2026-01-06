# Makefile for building CV with pdflatex

# Variables
SRCDIR = src
BUILDDIR = build
MAIN = eivindml-cv
TEXFILE = $(SRCDIR)/$(MAIN).tex
PDFFILE = $(BUILDDIR)/$(MAIN).pdf

# Compiler flags
PDFLATEX = pdflatex
PDFLATEX_FLAGS = -shell-escape -interaction=nonstopmode

# Default target
all: $(PDFFILE)

# Create build directory if it doesn't exist
$(BUILDDIR):
	mkdir -p $(BUILDDIR)

# Compile the PDF (run twice for references)
$(PDFFILE): $(TEXFILE) $(BUILDDIR)
	cd $(SRCDIR) && $(PDFLATEX) $(PDFLATEX_FLAGS) -output-directory=../$(BUILDDIR) $(MAIN).tex
	cd $(SRCDIR) && $(PDFLATEX) $(PDFLATEX_FLAGS) -output-directory=../$(BUILDDIR) $(MAIN).tex

# Clean temporary files
clean:
	rm -f $(BUILDDIR)/*.aux $(BUILDDIR)/*.log $(BUILDDIR)/*.out

# Clean all generated files including PDF
distclean: clean
	rm -f $(PDFFILE)
	rm -rf $(BUILDDIR)

# Watch for changes (requires entr: brew install entr)
watch:
	@echo "Watching for changes... (requires 'entr' to be installed)"
	@find $(SRCDIR) -name "*.tex" | entr -c make

# Open the PDF (macOS)
open: $(PDFFILE)
	open $(PDFFILE)

.PHONY: all clean distclean watch open
